import React, { useEffect } from 'react';
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector } from '../store/store';
import { getRecipeRandom } from '../store/reducers/recipesReducer';


const Recipes: React.FC = () => {
    const dispatch: AppDispatch = useRecipeDispatch()
  const { recipes } = useRecipeSelector((state: RootState) => state.recipes);

  // useEffect(() => {
  //   dispatch(getRecipeRandom());
  // }, [dispatch]);

  return (
    <div>
        {recipes[0] && recipes[0].title ? JSON.stringify(recipes[0].title) : ''}
      {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <React.Fragment key={r.id}>
          <h6>{r.name}</h6>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Recipes;

// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {getRecipeRandom} from '../store/actions/recipesActions'

// interface RecipesProps {
//     getRecipeRandom: () => void;
//   recipes: {
//     recipes: any[]
//   };
// }

// class Recipes extends Component<RecipesProps> {
//     componentDidMount(){
//         this.props.getRecipeRandom()
        
//     }
//     render() {
//         const {recipes} = this.props.recipes
//         console.log(recipes)

//         return (
//             <div>
//                 {recipes.map((r: any) => 
//                      <React.Fragment key={r.id}>
//                          <h6 >{r.name}</h6> 
//                      </React.Fragment>
//                 )}
//             </div>
//         )
//     }
// }

// const mapStateToProps  = (state: any) => ({recipes:state.recipes})

// export default connect(mapStateToProps, {getRecipeRandom})(Recipes)
