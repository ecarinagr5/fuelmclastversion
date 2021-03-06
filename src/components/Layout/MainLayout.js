import { Content, Footer, Header, Sidebar } from 'components/Layout';
import React from 'react';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from 'utils/constants';

//imagenes
import oneprice from '../../assets/img/cashback.png'
import franjasprice from '../../assets/img/price-tags.png'

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getDataAction } from '../../Redux/dataToShow'
import { setTypePrice } from '../../Redux/changePrice'

import moment from "moment";

class MainLayout extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector('.cr-sidebar')
      .classList.contains('cr-sidebar--open');
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint);

    /*setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdImportantDevices />,
        message: 'Welome to Reduction Admin!',
        level: 'info',
      });
    }, 1500);

    setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdLoyalty />,
        message:
          'Reduction is carefully designed template powered by React and Bootstrap4!',
        level: 'info',
      });
    }, 2500);*/
  }

  changePriceView = event => {
    let val = this.props.viewprice ? !this.props.viewprice  : this.props.viewprice;
    this.props.setTypePrice(val)
    console.log("sdfsdfds",this.props.viewprice)
    }

  // close sidebar when
  handleContentClick = event => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      MainLayout.isSidebarOpen() &&
      (this.props.breakpoint === 'xs' ||
        this.props.breakpoint === 'sm' ||
        this.props.breakpoint === 'md')
    ) {
      this.openSidebar('close');
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close');

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open');
    }
  }

  openSidebar(openOrClose) {
    if (openOrClose === 'open') {
      return document
        .querySelector('.cr-sidebar')
        .classList.add('cr-sidebar--open');
    }
    document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
  }

  render() {
    console.log(this.props)
    let  { viewprice } = this.props;
    const { children } = this.props;
    return (
      <main className="cr-app bg-light">
        <p className="calc_type" onClick={this.changePriceView}> { viewprice ? <p className="pvp-franjas">PVP Franjas</p> : <p className="pvp-franjas">Recomendado</p> }</p>
        <Sidebar />
        <Content fluid onClick={this.handleContentClick} {...this.props}>
          <Header {...this.props} />
          {children}
          <Footer />
        </Content>

        <NotificationSystem
          dismissible={false}
          ref={notificationSystem =>
            (this.notificationSystem = notificationSystem)
          }
          style={NOTIFICATION_SYSTEM_STYLE}
        />
      </main>
    );
  }
}


//Received Information REDUX
function mapStateToProps(state){
  return {
      test:state,
      data: state,
      viewprice: state.changePrice
  }
}
//Send Information REDUX
function mapDispatchToProps(dispatch){
  return bindActionCreators({
      getDataAction,
      setTypePrice
  }, dispatch )
}
export default connect(mapStateToProps,mapDispatchToProps)(MainLayout);
