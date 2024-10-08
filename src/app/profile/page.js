import './Profile.css';

const Profile = () => {
  return (
    <main className='profile_container'>
      <section className='description_content_wrapper'>
        <div className='bakcground_decoration'>
          <div className='profile_image'>
            <img
              src='https://ssl.gstatic.com/onebox/media/sports/photos/ufc/3605_rZmNsA_96x96.png'
              alt='profile image'
            />
          </div>
        </div>
        <div className='profile-description'>
          <div>
            <h2 className='profile-name'>Ilia Topuria</h2>
            <div>
              <span className='profile-email'>
                Email: elmatadortopuria@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='profile_settings'>
        <nav>
          <ul>
            <li>Account settings </li>
            <li>Manage password</li>
            <li>Order history </li>
            <li>Address </li>
            <li>Notification </li>
          </ul>
        </nav>
      </section>
      <section className='account_settings'>
        <form>
          <div className='label_wrapper'>
            <label htmlFor='username'>First Name</label>
            <input type='text' id='username' placeholder='Ilia' />
          </div>
          <div className='label_wrapper'>
            <label htmlFor='username'>Last Name</label>
            <input type='text' id='username' placeholder='Topuria' />
          </div>

          <div className='label_wrapper'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder='elmatadortopuria@gmail.com'
            />
          </div>

          <div className='label_wrapper'>
            <label htmlFor='secondname'>Phone Number</label>
            <input
              type='tel'
              id='secondname'
              required
              placeholder='(+987) 123 456 789'
            />
          </div>
          <div className='buttons_wrapper'>
            <button type='submit'>Cancel</button>
            <button type='submit'>Update</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;
