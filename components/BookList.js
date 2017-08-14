import React from 'react';
import {View} from 'react-native';
import BookItem from './BookItem';

export default function BookList({
    books,
    onDeleteItem,
    onReadItem,
    TouchableItem,
}){
    const items = books.map(book =>
    <BookItem 
        key={book.id} title={book.title} 
        read={book.read}
        onDeletButton={()=>onDeleteItem(book)}
        onReadButton={()=> onReadItem(book)}
        TouchableButton={()=>TouchableItem(book)}
    />
    );
    return <View>{items}</View>
}