import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersActions'

interface UsersProps {
  getUsers: () => void;
  users: {
    users: any[]
  };
}

class Users extends Component<UsersProps> {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const {users} = this.props.users
        console.log(users)

        return (
            <div>
                {users.map((u: any) => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.name}</h6> 
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state: any) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Users)


// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {getUsers} from '../store/actions/usersActions'

//  class users extends Component {
//     componentDidMount(){
//         this.props.getUsers()
        
//     }
//     render() {
//         const {users} = this.props.users
//         console.log(users)

        
//         return (
//             <div>
//                 {users.map((u: any) => 
//                      <React.Fragment key={u.id}>
//                          <h6 >{u.name}</h6> 
//                      </React.Fragment>
//                 )}
//             </div>
//         )
//     }
// }

// const mapStateToProps  = (state: any) => ({users:state.users})

// export default connect(mapStateToProps, {getUsers})(users)