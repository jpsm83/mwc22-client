import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import UserService from "../../services/user.service";
import Search from "../Search/Search";

export const UserFeed = () => {
  const userService = new UserService();

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    userService
      .get()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  });

  const handleSearch = (e) => {
    let searchedUsers = e.target.value;
    let filterUsers = users.filter((user) => {
      return user.username.toLowerCase().includes(searchedUsers.toLowerCase());
    });
    setFilteredUsers({ searchedUsers: filterUsers });
  };

  const displayfilteredUsers = () => {
    return filteredUsers.map((user) => {
      // spreed operator replace name/value from user - it is a shortcut
      return <UserCard key={user.id} {...user} />;
    });
  };

  //never update state inside render (setState), it causes infinity loop
  const displayUsers = () => {
    return users.map((user) => {
      // spreed operator replace name/value from user - it is a shortcut
      return <UserCard key={user.id} {...user} />;
    });
  };

  return (
    <div>
      <div>
        <div className="flex bg-gray-100 p-3 justify-center m-3">
          <Search handleSearch={(e) => handleSearch(e)} />
        </div>
        <div className="flex flex-wrap justify-between p-1.5">
          {users.length === 0 ? (
            <p className="text-lg font-bold">We got no user register so far</p>
          ) : filteredUsers.length > 0 ? (
            displayfilteredUsers()
          ) : (
            displayUsers()
          )}
        </div>
      </div>
    </div>
  );
};

// class RecipesFeed extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       recipes: [],
//       filteredRecipes: [],
//     };
//     // connection with RecipeService to be able to use all it services
//     // recipe.service.js is the bridge to connect frontend with backend
//     this.recipeService = new RecipeService();
//   }

//   // componentDidMount is the first method to execute in a component
//   componentDidMount() {
//     this.recipeService
//       .get()
//       .then((res) => {
//         this.setState({ recipes: res.data });
//       })
//       .catch((err) => console.error(err));
//   }

//   handleSearch(event) {
//     let searchedRecipes = event.target.value;
//     const { recipes } = this.state;
//     let filteredRecipes = recipes.filter((recipe) => {
//       return recipe.dishName.toLowerCase()
//         .includes(searchedRecipes.toLowerCase());
//     });
//     this.setState({ filteredRecipes: filteredRecipes });
//   }

//   displayfilteredRecipes() {
//     return this.state.filteredRecipes.map((recipe) => {
//       // spreed operator replace name/value from recipe - it is a shortcut
//       return <RecipeCard key={recipe.id} {...recipe} />
//     });
//   }

//   //never update state inside render (setState), it causes infinity loop
//   displayRecipes() {
//     return this.state.recipes.map((recipe) => {
//       // spreed operator replace name/value from recipe - it is a shortcut
//       return <RecipeCard key={recipe.id} {...recipe} />
//     });
//   }

//   render() {
//     return (
//       <div>
//       <div className="flex bg-gray-100 p-3 justify-center m-3">
//       <Search handleSearch={(e) => this.handleSearch(e)} />
//       </div>
//       <div className="flex flex-wrap justify-between p-1.5">

//         {this.state.recipes.length === 0 ? (
//           <p className="text-lg font-bold">
//             Lets get dirt, start to cook and create your first Recipe
//           </p>
//         ) : (
//           this.state.filteredRecipes.length > 0 ? this.displayfilteredRecipes() :
//           this.displayRecipes()
//         )}
//       </div>
//       </div>
//     );
//   }
// }

// export default RecipesFeed;
