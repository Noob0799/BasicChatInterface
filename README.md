# Basic Chat Interface  
This is a webapp developed using React and Redux Toolkit. It provides a basic chat interface, where you can see existing users who have already texted you, find existing users to text, add new users to text and delete existing user chats.  
### Live webapp link: https://noob-chat-interface.netlify.app/  

## Assumptions:
- src/data/Users.json contains a list of users already present, that you can message. Try typing their names in the search bar to load the list of users available
- src/data/Chats.json contains a list of existing chats between you and few users. This is done because another user cannot send you message, since its a frontend-only webapp. But you can send new messages to users via existing chats or by searching a user and creating a new chat
- You can only delete a chat with a user if you or the user has exchanged atleast one message. In the case, the chat card will show up on the left panel

## Features:  
- Show list of existing user chats
![image](https://github.com/user-attachments/assets/d9c97ed0-434d-48b3-a259-9ac0fd58ddc2)
- Search for existing users already present. Click on user name to open up new chat
![image](https://github.com/user-attachments/assets/159101fa-2029-4cff-930f-0ea86ecb1fc5)

![image](https://github.com/user-attachments/assets/8392c8a8-86d0-4813-ac86-55e7fb9f701d)

- Add new user by clicking on "Add" button. It opens up the "Add New User" modal. Type a name and hit "Save" to add the user. Now you can search for the user and click on the name to open up a new chat
![image](https://github.com/user-attachments/assets/62c3d4f9-18de-44bb-9e5e-5f73e1528624)

![image](https://github.com/user-attachments/assets/af98c152-778c-4a64-8cbb-8a1ec3ebd4ac)

![image](https://github.com/user-attachments/assets/a8846fb6-73f4-464f-8a77-22dcc5f070cd)

- When a new/existing chat opens up, the existing messages, if any, also shows up
![image](https://github.com/user-attachments/assets/62f46b93-b833-4d63-93fe-8ebf3a6a88bd)

- You can type a new message and hit "Enter" or click on "Send" to send a new message. Also notice that once message is sent, the chat card on the left panel moves to the top indicating that it is the latest chat
![image](https://github.com/user-attachments/assets/42264585-86e9-4e85-ad64-dfebe2e8310b)

- You can also click on "Delete" button to delete an existing chat. The chat card will also be removed from the left panel. The button however, will not appear, in case its a new user with whom no messages have been exchanged before.
![image](https://github.com/user-attachments/assets/139353c7-9212-4301-896a-00978350fd42)

## Steps to install and run the development server locally:
- Make sure you have Node.js installed
- git clone the repository
- go to the downloaded directory
- Run "npm install" to download all the dependencies
- Run "npm run dev". This should start the server on localhost
