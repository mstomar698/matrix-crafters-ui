import { useState } from 'react';

const DemoPage = () => {
  const [option, setOption] = useState('create');
  const [activeForm, setActiveForm] = useState('seller');
  const [sellerId, setSellerId] = useState('');
  const [userPin, setUserPin] = useState('');
  const [sellerOldPin, setSellerOldPin] = useState('');
  const [sellerPin, setSellerPin] = useState('');

  const handleFormSwitch = (formType: any) => {
    setActiveForm(formType);
  };
  async function cleanPins(pins: string) {
    const cleanPins = [];
    if (!pins) return [];
    if (!pins.includes(',')) {
      if (pins.length === 6) {
        return [pins];
      } else {
        return [];
      }
    }
    const pinsArray = pins.split(',');
    for (let i = 0; i < pinsArray.length; i++) {
      const pin = pinsArray[i].trim();
      if (pin.length === 6) {
        cleanPins.push(pin);
      } else {
      }
    }
    console.log(cleanPins, 'cleanPins', pinsArray, 'pinsArray', pins, 'pins');
    return cleanPins || [];
  }
  async function sellerHandler() {
    const api = 'https://644d-152-58-40-36.ngrok-free.app/routes';
    try {
      switch (option) {
        case 'create':
          const createResponse = await fetch(`${api}/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              seller_id: sellerId,
              pins: await cleanPins(sellerPin),
            }),
          });
          const createData = await createResponse.json();
          console.log(createData);
          break;
        case 'update':
          const updateResponse = await fetch(`${api}/update`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              seller_id: sellerId,
              new_pin: await cleanPins(sellerPin),
              old_pin: await cleanPins(sellerOldPin),
            }),
          });
          const updateData = await updateResponse.json();
          console.log(updateData);
          break;
        case 'delete':
          const deleteResponse = await fetch(`${api}/delete`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              seller_id: sellerId,
              pin_to_delete: await cleanPins(sellerPin),
            }),
          });
          const deleteData = await deleteResponse.json();
          console.log(deleteData);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function userHandler() {
    const api = `https://644d-152-58-40-36.ngrok-free.app/routes/search?seller_id=${sellerId}&pin=${await cleanPins(
      userPin
    )}`;
    try {
      const response = await fetch(api, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="min-h-screen bg-white [background:linear-gradient(180deg,rgb(255,236.39,235.73)_0%,rgb(59,55,46)_100%)] flex flex-col items-center justify-center text-center relative -mt-20">
      <div className="max-w-lg p-6 bg-transparent backdrop-blur-lg lg:min-w-[450px] rounded-lg shadow-lg shadow-black flex justify-center items-center flex-col min-h-[450px] max-lg:min-w-[300px]">
        <div className="flex mb-6 space-x-1 justify-center items-center">
          <button
            type="button"
            className={`py-2 px-4 text-sm rounded ${
              activeForm === 'seller'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => handleFormSwitch('seller')}
          >
            Seller
          </button>
          <button
            type="button"
            className={`py-2 px-4 text-sm rounded ${
              activeForm === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => handleFormSwitch('user')}
          >
            User
          </button>
        </div>
        {activeForm === 'seller' && (
          <>
            <div className="text-2xl font-bold mb-4">Seller Demo</div>
            <div className="flex flex-col w-min justify-center items-center text-center">
              <label htmlFor="seller-id" className="block mb-1">
                Seller Id
              </label>
              <input
                type="text"
                id="seller-id"
                className="border-2 border-black mb-2 px-1"
                onChange={(e) => setSellerId(e.target.value)}
              />
              <label htmlFor="seller-action" className="block mb-1">
                Select an action
              </label>
              <select
                id="seller-action"
                className="border-2 border-black mb-1"
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="create">Create</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
              </select>
              {option === 'update' && (
                <div>
                  <label htmlFor="seller-old-pin" className="block mb-1">
                    Enter Old Pin
                  </label>
                  <input
                    type="text"
                    id="seller-old-pin"
                    className="border-2 border-black mb-1 px-1"
                    onChange={(e) => setSellerOldPin(e.target.value)}
                  />
                </div>
              )}
              <label htmlFor="pin" className="block mb-1 px-1">
                Enter Pin / Pins
              </label>
              <input
                type="text"
                id="pin"
                className="border-2 border-black mb-2 px-1"
                onChange={(e) => setSellerPin(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={sellerHandler}
              >
                Submit
              </button>
            </div>
          </>
        )}
        {activeForm === 'user' && (
          <>
            <div className="text-2xl font-bold mb-4">User Demo</div>
            <div className="flex flex-col w-min justify-center items-center text-center">
              <label htmlFor="user-seller" className="block mb-1">
                Select a seller
              </label>
              <input
                type="text"
                id="user-seller"
                className="border-2 border-black mb-1 px-1"
                onChange={(e) => setSellerId(e.target.value)}
              />
              <label htmlFor="user-pin" className="block mb-1">
                Your Pin
              </label>
              <input
                type="text"
                id="user-pin"
                className="border-2 border-black mb-2 px-1"
                onChange={(e) => setUserPin(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={userHandler}
              >
                Search
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoPage;
