interface Props {
  name: string;
}

const El: React.FC<Props> = (props) => <h1>Hello, {props.name}</h1>;

ReactDOM.render(<El name="taro"></El>, document.getElementById("root"));
