const github = new GitHub();
const ui = new UI();
//Search Input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get Input Text
  const userText = e.target.value;

  if(userText !== ''){
      github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                   //Show alert
                   ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
  } else {
      //Clear profile

  }

});