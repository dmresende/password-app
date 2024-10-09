import React, { useState } from "react";
import { View, Pressable, TextInput, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { showDeleteAlert } from "../alerts/alerts";
import { passwordItemStyles } from "./styles";
import { theme } from "../../styles/theme";

export function PasswordItem({ data, removePassword }) {
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    // Esta função alterna a visibilidade da senha para um item específico
    const togglePasswordVisibility = (index) => {
        // Atualiza o estado 'visibleIndexes' usando uma função
        setVisibleIndexes(prev => {
            // Verifica se o índice atual já está incluído no array de índices visíveis
            if (prev.includes(index)) {
                // Se estiver, remove o índice do array (torna a senha invisível)
                return prev.filter(i => i !== index);
            } else {
                // Se não estiver, adiciona o índice ao array (torna a senha visível)
                return [...prev, index];
            }
        });
    };

    return (
        data && data.length > 0 && (    
        <View>
            {data.map((item, index) => (
            <Pressable key={index} style={passwordItemStyles.container} onLongPress={() => showDeleteAlert(removePassword)}>
                <View style={passwordItemStyles.content}>
                    <TextInput
                        style={passwordItemStyles.text}
                        secureTextEntry={!visibleIndexes.includes(index)}
                        editable={false}
                        value={item.password}
                    />
                    <Text style={passwordItemStyles.title}>{item.title}</Text>
                </View>
                <TouchableOpacity style={passwordItemStyles.button} onPress={() => togglePasswordVisibility(index)}>
                    {visibleIndexes.includes(index) ?
                        <Ionicons name="eye-off" color={theme.colors.textInfor} size={25} />
                        :
                        <Ionicons name="eye" color={theme.colors.textColor} size={25} />
                    }
                </TouchableOpacity>
            </Pressable>
            ))}
        </View>
        )
    )
}
