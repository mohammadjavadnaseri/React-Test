import './App.css';

function App() {
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
    </div>
  );
  
}



export default (App);