import './App.css';
import Header from './component/header';
import Parent from './component/parent';
import SignupForm from './component/ex8/formik.js';
import Product from './component/ex8/products.js'


function App() {
  const headerProps = [
    {title: 'ptag',textShow:'ptag text'},
    {title: 'h2tag',textShow:'h2 text'},
  ];

  return (
    <div className='ValedDiv'>
      <p style={{color: "rgb(160, 163, 65)"}}> This is styled CM.</p>
      <div className='DivBackground'>
        <p id='Ptag'> This is a new CM.</p>
      </div>
      <div className='ValedDiv'>
        <p style={{color: "rgb(160, 163, 65)"}}> This is styled CM.</p>
        <div className='DivBackground2'>
          <p id='Ptag2'> This is a new CM.</p>
        </div>
      </div>
      
      {/* Exercise Part-6 */}
      <Parent>
        <Header 
          title={headerProps[0].title} 
          textShow={headerProps[0].textShow}
        />
        <Header 
        title={headerProps[1].title} 
        textShow={headerProps[1].textShow} 
        />
      </Parent>

      {/* Exercise Part-7 */}

      {/* Exercise Part-8 */}

      <SignupForm />
      <br/>
      <Product />
    


  
    </div>
  );
  
}



export default (App);