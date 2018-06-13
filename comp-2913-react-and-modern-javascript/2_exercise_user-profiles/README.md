# User Profiles

## Exercise

### Part 1
- [x] Create a Login View and a Users View component.
- [x] On the Login View, display a “Login” button.
- [x] Clicking on the login button should hide the Login View and display the Users View.
- [x] Assign data below to a variable, as test data.
- [x] Render all items in the Array in the Users View. The data represents test users. Data available at randomuser.me
- [x] Ensure that you create a “Profile” component - don’t render everything in one giant component.
- [ ] Display different icons for male/female users.
- [ ] Display an American flag for American users, and a Canadian one for Canadians. You can use the “nat” property of the user object to determine this.
- [x] Display non-sensitive data in your Profile component, such as name, username, image, address, etc.

### Part 2
- [ ] Create a “LoginView” component, and render it under .
- [ ] “LoginView” should have an initialState for empty “username” and “password”.
- [ ] Render an input for your username, and one for your password, nested under a form.
- [ ] Also add submit button to the form.
- [ ] Use your inputs as controlled inputs, meaning that the source of truth for their value is in the component state.
- [ ] onSubmit, use the API below to login.
- [ ] Display a loading spinner while the login response is pending.
- [ ] If the login credentials are wrong, display an invalid credentials message.
- [ ] If the login credentials are correct, display a Welcome message instead.
