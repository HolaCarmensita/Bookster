import './browsingHeader.css';

function BrowsingHeader({ browsingAs }, { userName }) {
  return (
    <div className='header wrapper'>
      <h2 className='header-title'>{browsingAs}</h2>
      <div className='header-left'>
        <p>Browsin as Casandra Gustafsson{userName}</p>
        <button className='headerBtn'>Sign out</button>
      </div>
    </div>
  );
}
export default BrowsingHeader;
