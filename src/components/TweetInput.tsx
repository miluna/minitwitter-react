import React, {Component} from 'react'
import Button from "./Button";
import TextArea from "./TextArea";
import withServicesContext from "../context/withServicesContext";
import {ContextProps} from "../context/ServicesContext";
import {Post} from "../models/Post";
import uuid from "uuid/v4";

interface TweetInputState {
    text: string,
    error: string,
}

class TweetInput extends Component<ContextProps,TweetInputState> {
    constructor(props: any) {
        super(props);
        this.state = {
            text: "",
            error: "",
        }
    }
    updateText = (text: string) => this.setState({text});
    sendTweet = () => {
        const { text } = this.state;
        const { postService } = this.props;
        if (text !== "") {
            const post: Post = {
                content: text,
            };
            postService.postOne(post)
                .then(success => console.log(success))
                .catch(error => this.setState({error}));
        }
    };

    render() {
        const { text, error } = this.state;
        return (
            <div key={uuid()} id="tweet-input-box" className="tweet">
                <TextArea
                    placeholder="Start tweeting!"
                    value={text}
                    onChange={(e: any) => this.updateText(e.target.value)}
                    label="Insert your tweet"
                />
                <Button id="tweet-btn" text="Send" primary onClick={this.sendTweet}/>
                {error !== "" && 
                    <p style={{ color: 'red' }}>{error}</p>
                }
            </div>
        )
    }
}

export default withServicesContext(TweetInput);
