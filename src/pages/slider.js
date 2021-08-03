import React from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import Menu from './menu';
import { connect } from 'react-redux';
import { setRemote } from '../redux/actions';
import { Link } from "react-router-native";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0,
            isRemote: false,
            imageId: 0,
            local: [
                "https://example-reactjs-task2.public.osora.ru/static/media/0.c3b84712.jpg",
                "https://example-reactjs-task2.public.osora.ru/static/media/1.67af6503.jpg",
                "https://example-reactjs-task2.public.osora.ru/static/media/2.a6db64e7.jpg"
            ],
        }
    }

    componentDidMount() {
        this.remoteImages()
        this.getImages()
    }

    remoteImages = async () => {
        let response = await fetch('https://imagesapi.osora.ru/');
        let result = await response.json();
        this.props.setRemote(result)
    }

    switchSource = () => {
        this.setState({ isRemote: !this.state.isRemote })
    }

    getImages = () => {
        if (this.state.isRemote) {
            return this.state.remote = this.props.remote
        } else {
            return this.state.local
        }
    }

    nextImage = () => {
        if (this.state.imageId !== this.getImages().length - 1) {
            this.setState({ imageId: this.state.imageId + 1 })
        } else {
            this.setState({ imageId: 0 })
        }
    }

    prevImage = () => {
        if (this.state.imageId !== 0) {
            this.setState({ imageId: this.state.imageId - 1 })
        } else {
            this.setState({ imageId: this.getImages().length - 1 })
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Pressable onPress={this.prevImage}><View style={styles.buttonBlock}><Text style={styles.buttonText}>prev</Text></View></Pressable>
                        <Image style={styles.imagesBlock} source={{ uri: this.getImages()[this.state.imageId] }} />
                        <Pressable onPress={this.nextImage}><View style={styles.buttonBlock}><Text style={styles.buttonText}>next</Text></View></Pressable>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Pressable onPress={this.switchSource}><View style={styles.buttonBlock}><Text style={styles.buttonText}>
                            switch to {this.state.isRemote === false ? 'remote' : 'local'}</Text></View></Pressable>
                        <Link to="/"><View style={styles.buttonBlock}><Text style={styles.buttonTextUnderline}>back to main</Text></View></Link>
                    </View>
                </View>
                <Menu></Menu>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        marginTop: 200,
    },

    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    imagesBlock: {
        backgroundColor: 'black',
        width: 250,
        height: 200,
        margin: 10,
    },

    buttonBlock: {
        backgroundColor: 'black',
        minWidth: 40,
        padding: 5
    },

    buttonText: {
        fontSize: 16,
        color: 'white'
    },

    buttonsContainer: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90,
    },

    buttonTextUnderline: {
        fontSize: 16,
        color: 'white',
        padding: 5,
        textDecorationLine: 'underline'
    }
});

export default connect(mapStateToProps, { setRemote })(Slider)