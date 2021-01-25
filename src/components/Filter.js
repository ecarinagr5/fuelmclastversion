/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Table
} from "react-bootstrap";
import { Multiselect } from 'multiselect-react-dropdown';



class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        options: [{name: 'Servico Aztecas', id: 1},{name: 'Servico Neza', id: 2},{name: 'Azcapotzalco', id: 3},{name: 'Naucalpan', id: 4}],
        cliente: [{name: 'A', id: 1},{name: 'B', id: 2}],
        precio: [{name: '> 10', id: 1},{name: '< 10', id: 2}],
        semaforo: [{name: 'red', id: 1},{name: 'green', id: 2}]
    };
    
    this.onSelect = this.onSelect.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }

        onSelect(selectedList, selectedItem) {

        }

        onRemove(selectedList, removedItem) {
        
        }

  render() {

    return (
    <div>
          <Row>
              <hr></hr>
            <Col md={12} >

            <div className="content-filter">
                <Col md={2} className="float-left-five">
                  <label>
                    Operadora 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16" className="icon-filter">
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                  </label>
                  <p className="filter-container">
                    <Multiselect
                        options={this.state.options} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        className="row-filter"
                        />
                  </p>
                </Col>
                  <Col md={2} className="float-left-five">
                      <label>Cliente <i className="pe-7s-filter"></i></label>
                  <p className="filter-container">
                      <Multiselect
                          options={this.state.cliente} // Options to display in the dropdown
                          selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                          onSelect={this.onSelect} // Function will trigger on select event
                          onRemove={this.onRemove} // Function will trigger on remove event
                          displayValue="name" // Property name to display in the dropdown options
                          />
                  </p>
                  </Col>
                  <Col md={2} className="float-left-five">
                      <label>
                        Precio 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16" className="icon-filter">
                          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                        </svg>
                      </label>
                    <p className="filter-container">
                      <Multiselect
                          options={this.state.precio} // Options to display in the dropdown
                          selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                          onSelect={this.onSelect} // Function will trigger on select event
                          onRemove={this.onRemove} // Function will trigger on remove event
                          displayValue="name" // Property name to display in the dropdown options
                          />
                    </p>
                  </Col>
                  <Col md={2} className="float-left-five">
                    <label>
                      Semaforo 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16" className="icon-filter">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                      </svg>
                    </label>
                      <Multiselect
                        options={this.state.semaforo} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        />
                  </Col>
                  <Col md={2} className="float-left-five">
                    <button className="btn btn-outline-secondary clear-filter btn-red">Clear All</button>
                  </Col>
              </div>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Filter;
