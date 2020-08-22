const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById('search-user');
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText != '') {
    github.getUser(userText).then((data) => {
      if (data.proDate.message === 'Not Found') {
        ui.showAlert('User Not Found', 'alert alert-danger');
        ui.clearProfile();
      } else {
        ui.showProfile(data.proDate);
        ui.showRepo(data.repoData);
      }
    });
  } else {
    ui.clearProfile();
  }
});
