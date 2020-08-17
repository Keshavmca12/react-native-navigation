import React, { Component } from "react";
import { Card, ListItem } from "react-native-elements";
const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
];



class CardComponent extends Component {
    static navigationOptions = {
        headerTitle: "Details"
    };

    render() {
        return (

          /*   <Card title="CARD WITH DIVIDER">
                {
                    users.map((u, i) => {
                        return (
                            <View key={i} style={styles.user}>
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: u.avatar }}
                                />
                                <Text style={styles.name}>{u.name}</Text>
                            </View>
                        );
                    })
                }
            </Card> */

            <Card containerStyle={{ padding: 0, width:300 }} >
                {
                    users.map((u, i) => {
                        return (
                            <ListItem
                                key={i}
                                title={u.name}
                                leftAvatar={{ source: { uri: u.avatar } }}
                            />
                        );
                    })
                }
            </Card>
      
      
    );
    }
}

export default CardComponent;
