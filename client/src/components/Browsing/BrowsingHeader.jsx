import './browsingHeader.css';

function BrowsingHeader() {
  return (
    <div className='header-container'>
      <div className='header wrapper'>
        <div className='header-title'>
          <h1>Bookster</h1>
        </div>
        <div className='header-left'>
          <p>Browsin as Casandra</p>
          <button className='headerBtn'>Sign out</button>
        </div>
      </div>
    </div>
  );
}
export default BrowsingHeader;
