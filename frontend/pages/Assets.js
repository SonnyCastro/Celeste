/* /pages/index.js */
import React, { useState } from "react";
import AssetList from "../components/AssetList";
// import CategoryList from "../components/CategoryList";

function Assets() {
  const [query, updateQuery] = useState("");
  return (
    <div style={{textAlign:"center"}}>
      <h1>DeFi Category Page !!!</h1>
          <div style={{padding:"2%"}}>
              <input
                onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
                value={query}
                style={{border:"5px solid black", width:"20%", height:"5vh", fontSize:"30px"}}
              />      
          </div>
        <div style={{border:"20px solid red",}}>
          <AssetList key={query} search={query} />
          {/* <CategoryList /> */}
          </div>
          
    </div>
  );
}
export default Assets;