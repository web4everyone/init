import React from 'react';

class App extends React.Component { 
    render() {
      return (
          <div>
            <Board></Board>  
          </div>
      );
   }
}

class Content extends React.Component{    

    constructor(props){
        super(props);
            this.state = { //this is same as getInitialState
                checked: true,
                editing: false
            };
    }

    handleChecked(){    
        this.setState({checked: !this.state.checked});  
    }

    edit(){
        this.setState({editing:true});
        this.props.updateCommentText(this.refs.newText.value, this.props.index)
    }
    
    save(){
        var textVal =  this.refs.updateText.value;
        alert(textVal);
        this.setState({editing:false});
    }
    
    remove(){
        console.log('You clicked on remove');
        this.props.deleteFromBoard(this.props.index)
    } 
    
    renderNormal(){
       return(
           <div className="commentContent">
                <div>
                    <h3>{this.props.children}</h3>
                    <button className="blue" onClick={this.edit.bind(this)}>Edit</button>
                    <button className="red" onClick={this.remove}>Remove</button>
                     
                </div> 
            </div> 
        );    
    }
    
    renderForm(){
        return(
           <div className="commentContent">
                <div>
                    <textarea ref="updateText" defaultValue={this.props.children}></textarea>
                    <button className="green" onClick={this.save.bind(this)}>Save</button>                    
                     
                </div> 
            </div> 
        );        
    }
    
    render(){
         
       
            if(!this.state.editing)
                 return  (this.renderNormal());
            else
                return (this.renderForm());
          
    }
}




class Board extends React.Component{
    constructor(props){ 
        super(props);
        
        this.state = {
            
            comments:
            [
                'My first sample comment',
                'This is another comment',
                'I love movies'
            ]
        };
    }
    
    
    
    removeComment(i){
        var arr = this.state.comments;
        var ans = confirm('Are you sure to delete?');
        if(ans){
            arr.splice(i,1);
        }
        this.setState(comments:arr)
    }
    
    editComment(updateText, i){
        alert(1)
        var arr = this.state.comments;         
        arr[i] = updateText;
        this.setState(comments:arr)
    }
    
    eachComment(commentText, i){
        var myText;
        return (
            <Content index={i} key={i}>
                {commentText}
            </Content>
        )
        
    }
    
    render(){
        return(
            <div className="board">
                {
                     this.state.comments.map(this.eachComment.bind()) 
                }
            </div>
        );
    }
}

export default App;