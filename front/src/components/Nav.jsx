import SearchBar from "./SearchBar";

export default function Nav(props) {
    return (
        <div>
            <SearchBar onSearch={props.onSearch}/>
            <button>Random Character</button>
        </div>
    )
}