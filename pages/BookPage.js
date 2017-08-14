import React,{ Component} from 'react';
import{ ScrollView } from 'react-native';
import AddBookPanel from '../components/AddBookPanel';
import BookList from '../components/BookList';
const Books =[];
let index =0;
for(let i=0;i<100;i++){
    Books.push(
        {
            id:index++,
            title:`名著${i+1}`,
            page:'BookShowPage',
        }
    )
}
export default class BookPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            books:Books,
            title:'',
        }
    }
    onAddBookPanelClick(){
        if(!this.state.title){
            return;
        }
        const book={
            id:index++,
            title:this.state.title,
            page:'BookShowPage',
        };
        const books = [book,...this.state.books];
        this.setState({
            books,
            title:'',
        });
    }

    onTitleChange(value) {
        this.setState({
            title: value,
        });
    }

    onDelete(book) {
        const idx = this.state.books.indexOf(book);

        const books = [
            ...this.state.books.slice(0, idx),
            ...this.state.books.slice(idx + 1)
        ];

        this.setState({
            books,
        });
    }

    onRead(book) {
        const idx = this.state.books.indexOf(book);
        const newbook = {...book, read:!book.read};
        const books = [ ...this.state.books.slice(0, idx),
            newbook,
            ...this.state.books.slice(idx + 1)];
        
        this.setState({
            books,
        });
    }
    Touchable(book){
        const { navigate } = this.props.navigation;
        navigate(book.page,book);
    }
    render(){
        return<ScrollView>
           <AddBookPanel title={this.state.title}
            onclick={(title)=>this.onAddBookPanelClick(title)}
            onTitleChange={(value)=>this.onTitleChange(value)}
            />

           <BookList books={this.state.books} 
            onDeleteItem={(book)=>this.onDelete(book)}
            onReadItem={(book)=>this.onRead(book)}
            TouchableItem={(book)=>this.Touchable(book)}
           />         
        </ScrollView>
    }
}
BookPage.navigationOptions={title:'书籍列表'};
