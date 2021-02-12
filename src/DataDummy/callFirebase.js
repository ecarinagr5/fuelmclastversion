firebase.database().ref('users/' + userId).set({
    id:id,
    usario: usuario
  }, (error) => {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
    }
  });
  