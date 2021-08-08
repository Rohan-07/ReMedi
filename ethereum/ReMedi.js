import web3 from "./web3";
import ReMedi from "./build/ReMedi.json";

const instance = new web3.eth.Contract(
	ReMedi.abi,
	"0xd99F9e3309FB60eAFcBE70CaFbe02f5C8d54776A"
);
export default instance;
