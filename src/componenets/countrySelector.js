import React from 'react';
import { Select } from 'antd';
 import "../componenets/countrySelector.css";

// import USFlag from '/images/Flag.png'; // Path to your US flag image
// import 'antd/dist/antd.css'; // Import Ant Design styles

const { Option } = Select;

// const LanguageSelector = () => {
//   return (
//     <Select defaultValue="us" style={{ width: 100 }}>
//       <Option value="us">
//         <img
//         className=''
//           src='/images/Flag.png'
//           alt="US"
//           style={{ width: 20, height: 15, marginRight: 8 }}
//         />
//         {/* <p className='flag-image'></p> */}
//         US
//       </Option>
//       <Option value="fr">
//         <span role="img" aria-label="French" style={{ marginRight: 8 }}>🇫🇷</span>
//         French
//       </Option>
//       <Option value="es">
//         <span role="img" aria-label="Spanish" style={{ marginRight: 8 }}>🇪🇸</span>
//         Spanish
//       </Option>
//     </Select>
//   );
// };

// export default LanguageSelector;


const LanguageSelector = () => {
    return (
      <Select defaultValue="us" className="language-selector" >
        <Option value="us">
        <img
         className=''
           src='/images/Flag.png'
           alt="US"
           style={{ width: 20, height: 12, marginRight: 8 }}
         />
          EN
        </Option>
        <Option value="fr">
          <span className="flag-emoji" role="img" aria-label="French">🇫🇷</span>
          French
        </Option>
        <Option value="es">
          <span className="flag-emoji" role="img" aria-label="Spanish">🇪🇸</span>
          Spanish
        </Option>
      </Select>
    );
  };
  
  export default LanguageSelector;