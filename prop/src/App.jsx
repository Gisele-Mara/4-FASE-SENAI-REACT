import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Product from './components/Product'

function App() {
  let arrayProduct = [
    {
      id: 1,
      name: "Beach Towel",
      description: "A large, soft towel perfect for lounging on the sand.",
      price: 25.99,
      weight: "0.7 kg"
    },
    {
      id: 2,
      name: "Sunscreen SPF 50",
      description: "High protection sunscreen to prevent sunburn and skin damage.",
      price: 14.99,
      weight: "0.2 kg"
    },
    {
      id: 3,
      name: "Beach Umbrella",
      description: "A sturdy umbrella to provide shade and protection from the sun.",
      price: 49.99,
      weight: "2.5 kg"
    },
    {
      id: 4,
      name: "Beach Chair",
      description: "A comfortable, foldable chair with a reclining feature.",
      price: 59.99,
      weight: "3.2 kg"
    },
    {
      id: 5,
      name: "Cooler Bag",
      description: "A portable cooler to keep your drinks and snacks cold.",
      price: 34.99,
      weight: "1.0 kg"
    },
    {
      id: 6,
      name: "Beach Ball",
      description: "A colorful inflatable ball for fun beach games.",
      price: 9.99,
      weight: "0.3 kg"
    },
    {
      id: 7,
      name: "Snorkel Set",
      description: "Includes mask, snorkel, and fins for underwater exploration.",
      price: 69.99,
      weight: "1.5 kg"
    },
    {
      id: 8,
      name: "Beach Bag",
      description: "A large, durable bag to carry all your beach essentials.",
      price: 29.99,
      weight: "0.5 kg"
    },
    {
      id: 9,
      name: "Sand Toy Set",
      description: "Includes bucket, shovel, and various molds for building sandcastles.",
      price: 15.99,
      weight: "0.8 kg"
    },
    {
      id: 10,
      name: "Beach Hat",
      description: "A wide-brimmed hat to protect your face from the sun.",
      price: 19.99,
      weight: "0.2 kg"
    },
    {
      id: 11,
      name: "Flip-Flops",
      description: "Comfortable sandals perfect for walking on the beach.",
      price: 12.99,
      weight: "0.4 kg"
    },
    {
      id: 12,
      name: "Beach Blanket",
      description: "A waterproof blanket for picnicking or lounging on the sand.",
      price: 22.99,
      weight: "1.0 kg"
    },
    {
      id: 13,
      name: "Waterproof Phone Case",
      description: "Protective case to keep your phone safe and dry.",
      price: 18.99,
      weight: "0.1 kg"
    },
    {
      id: 14,
      name: "Beach Tent",
      description: "A pop-up tent for privacy and shade on the beach.",
      price: 89.99,
      weight: "2.0 kg"
    },
    {
      id: 15,
      name: "Beach Mat",
      description: "A lightweight, foldable mat for a comfortable seating area.",
      price: 16.99,
      weight: "0.6 kg"
    },
    {
      id: 16,
      name: "Portable Fan",
      description: "A compact fan to help you stay cool on hot beach days.",
      price: 24.99,
      weight: "0.3 kg"
    },
    {
      id: 17,
      name: "Beach Volleyball",
      description: "A durable volleyball designed for sand play.",
      price: 21.99,
      weight: "0.4 kg"
    },
    {
      id: 18,
      name: "Beach Cooler Box",
      description: "A hard-sided cooler box with a large capacity.",
      price: 74.99,
      weight: "4.0 kg"
    },
    {
      id: 19,
      name: "Sun Hat",
      description: "A lightweight hat with a wide brim for sun protection.",
      price: 17.99,
      weight: "0.2 kg"
    },
    {
      id: 20,
      name: "Water Shoes",
      description: "Shoes designed to protect your feet from hot sand and rocky shores.",
      price: 27.99,
      weight: "0.5 kg"
    },
    {
      id: 21,
      name: "Beach Lounge Chair",
      description: "An adjustable chair with a reclining feature for ultimate relaxation.",
      price: 99.99,
      weight: "4.0 kg"
    }
  ]

  let product = {
    name: "Chair",
    description: "A chair to sit",
    price: 40,
    weight: 63
  }

  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputPrice, setInputPrice] = useState('bb');
  const [inputWeight, setInputWeight] = useState('cc');
  const [arrayP, setInputArrayP] = useState(arrayProduct)

  function nameChanged(event) {
    setInputName(event.target.value)
    // console.log(event)
  }
  function insertData() {
    let obj = {
      id: Date.now,
      name: inputName,
      description: inputDescription,
      price: inputPrice,
      weight: inputWeight
    }
    console.log(obj)
    setInputArrayP([obj,
      ...arrayP

    ]);
  }





  return (
    <>
      <div>
        <Title text={"Register a Product"} />
        {/* <Product appProduct={product}/> */}


        <div className="formCadastro">
          <div className="inputContainer">
            <label htmlFor="">Name: </label>
            <input type="text"
              placeholder='Name'
              value={inputName}
              onChange={nameChanged}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="">Description </label>
            <input type="text"
              placeholder='Description'
              maxLength={16}
              value={inputDescription}
              onChange={(event) => setInputDescription(event.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="">Price </label>
            <input type="number"
              placeholder='Price'
              min={0}
              step={0.1}
              value={inputPrice}
              onChange={(event) => setInputPrice(event.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="">Weight: </label>
            <input type="number"
              placeholder='Weight'
              min={0}
              step={0.1}
              value={inputWeight}
              onChange={(event) => setInputWeight(event.target.value)}
            />
          </div>
        </div>
        <button onClick={insertData}> Insert </button>
       
       
       
          <div className='product-container-card'>
            {
              arrayP.map((item) =>
                (<Product key={item.id} appArrayProduct={item} />))
            }
        </div>
      </div>
    </>
  )
}

export default App
