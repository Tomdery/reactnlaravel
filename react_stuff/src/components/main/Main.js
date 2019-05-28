import React, { Component } from 'react'

import Post from '../post/Post'

export default class Main extends Component {
    constructor(){
        super()
        this.state = {
                posts:[]
        }
    }


    componentDidMount() {
        fetch("http://web.local/api/post")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                })
            })
    }

    render() {
        const postComponents = this.state.posts.map(post=>{
            return(<Post id={post.id} title={post.title} content={post.content} by={post.by} created_at={post.created_at}/>
            )
        });
        return (
            <div>
                {postComponents}
            </div>
        )
    }
}