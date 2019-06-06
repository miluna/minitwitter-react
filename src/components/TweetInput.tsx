import React, {Component} from 'react'
import Button from "./Button";
import TextArea from "./TextArea";
import withServicesContext from "../context/withServicesContext";
import {ContextProps} from "../context/ServicesContext";
import {Post} from "../models/Post";
import config from "../config";

interface TweetInputProps extends ContextProps {
    onSendTweet: Function,
}
interface TweetInputState {
    text: string,
    error: string,
    loading: boolean,
}

class TweetInput extends Component<TweetInputProps,TweetInputState> {
    constructor(props: any) {
        super(props);
        this.state = {
            text: "",
            error: "",
            loading: false,
        }
    }
    updateText = (text: string) => this.setState({text});
    sendTweet = () => {
        const { text } = this.state;
        const { postService, onSendTweet } = this.props;
        if (text !== "" && config.REGEX_TWEET.test(text)) {
            const post: Post = {
                content: text,
            };
            this.setState({loading: true, error:""});
            postService.postOne(post)
                .then(success => {
                    console.log(success);
                    onSendTweet();
                    this.setState({ text: "", loading: false });
                })
                .catch(error => this.setState({error, loading: false}));
        } else {
            this.setState({error: "Your tweet is empty, too long or has invalid characters!!"});
        }
    };

    render() {
        const { text, error, loading } = this.state;

        return (
            <div id="tweet-input-box" className="tweet">
                <TextArea
                    loading={loading}
                    placeholder="Start tweeting!"
                    value={text}
                    onChange={(e: any) => this.updateText(e.target.value)}
                    label="Insert your tweet"
                />
                <Button 
                    id="tweet-btn" 
                    text="Send" 
                    primary
                    error={error !== ""} 
                    loading={loading} 
                    onClick={this.sendTweet}
                />
                {error !== "" &&
                    <p style={{ color: 'red' }}>{error}</p>
                }
            </div>
        )
    }
}

export default withServicesContext(TweetInput);
