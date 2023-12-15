import React, { useState } from "react";
import { View, Pressable, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { showDeleteAlert } from "../../../uteis/alerts";
import { passwordItemStyles } from "./styles";

export function PasswordItem({ data, removePassword }) {
    const [hidePass, setHidePass] = useState(true);

    return (
        <View>
            <Pressable style={passwordItemStyles.container} onLongPress={() => showDeleteAlert(removePassword)}>
                <TextInput
                    style={passwordItemStyles.text}
                    secureTextEntry={hidePass}
                >{data}
                </TextInput>

                {/* esconde senha */}
                <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                    {/* condição que mostra a troca de ícone */}
                    {hidePass ?
                        <Ionicons name="eye-off" color='#BFC0C0' size={25} />
                        :
                        <Ionicons name="eye" color='#FFFFFF' size={25} />
                    }
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}