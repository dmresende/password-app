import React, { useState } from "react";
import { View, Pressable, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { showDeleteAlert } from "../alerts/alerts";
import { passwordItemStyles } from "./styles";
import {theme} from '../../styles/theme';

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
                        <Ionicons name="eye-off" color={theme.colors.textInfor} size={25} />
                        :
                        <Ionicons name="eye" color={theme.colors.textColor} size={25} />
                    }
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}