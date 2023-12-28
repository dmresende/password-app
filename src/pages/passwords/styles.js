import { StyleSheet } from 'react-native'
import {theme} from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: theme.colors.secondary,
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: theme.colors.textInfor,
        fontWeight: 'bold'
    },
    content: {
        flex: 1
    },
    list: {
        flex: 1,
        paddingTop: 14,
        margin: 10
    }
})