import Header from "./Header/Header"
import Banner from "./Banner/Banner"
import Available from "./Available/Available"
import Selected from "./Selected/Selected"
import Footer from "./Footer/Footer"
import Newsletter from "./Newsletter/Newsletter"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [balance, setBalance] = useState(0)
  const [selected, setSelected] = useState([])
  const [player,setPlayer]=useState(1)
  const [isActive,setActive]=useState({
    cart: true,
    status: 'cart'
  })
  const handleActive=(status)=>{
    if(status=='cart'){
      setActive({
        cart: true,
    status: 'cart'
      })
    }
    else{
      setActive({
        cart: false,
    status: 'about'
      })
    }
  }
console.log(isActive);

  const handelBalance = (amount) => {
    const newBalance = balance + amount
    setBalance(newBalance)
    toast.success('Credit Added TO Your Account!')
  }

  const ChosePlayer = (card,id) => {
    const newBalance1 = balance - card.biddingPrice
    if (newBalance1 < 0) {
      toast.error('You dont have sufficient balance!')
    }
    else {
      
      if(player>6){
         toast.error('You cant add more than six players!')
      }
      else{
          const newPlayer=selected.find(selected => selected.playerId == id)
          if(newPlayer){
            toast.error(`Opps ${card.name} already in your team`)
          }
          else{
                 setPlayer(player+1)
         setBalance(newBalance1)
      toast.success(`Congrats ${card.name} Added To Your Team`)
      const newSelected = [...selected, card];
      setSelected(newSelected);
          }
      }
    }
  }

  const remove = (id) =>{
    setPlayer(player-1)
    const remainingPlayers = selected.filter(selected => selected.playerId !== id);
    setSelected(remainingPlayers);
    toast.warn(`Player removed!`);
    
  }




  return (
    <div className="relative">
      <ToastContainer position="top-center"></ToastContainer>
      <Header balance={balance}></Header>
      <Banner handelBalance={handelBalance}></Banner>
      <Available ChosePlayer={ChosePlayer} selected={selected} handleActive={handleActive} isActive={isActive}></Available>
      <Selected selected={selected} remove={remove} handleActive={handleActive} isActive={isActive}></Selected>
      <Newsletter></Newsletter>
      <Footer></Footer>

    </div>
  )
}

export default App
