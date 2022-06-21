import React from 'react';

export default function Forms() {
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    gender: '',
    feedback: '',
    swallow: '',
    soup: '',
    accessories: '',
    age: 0,
    isFoodtime: false,
    isShowOutput: false,
    email: '',
  });

  const times = new Date().getHours();
  let food = '';
  let time = times >= 12 ? 'brunch' : 'breakfaslet';

  if (times < 12) {
    food = 'diner';
  } else {
    food = 'supper';
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: type == 'checkbox' ? checked : value,
      };
    });
  }

  let FirstName = '';
  let LastName = '';
  let Gender = '';
  let Feedback = '';
  let Swallow = '';
  let Soup = '';
  let Accessories = '';
  let Age = 0;
  let IsFoodtime = true;
  let Email = '';

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
    // FirstName = data.firstName;
    // LastName = data.lastName;
    // Gender = data.gender;
    // Feedback = data.feedback;
    // Swallow = data.swallow;
    // Soup = data.soup;
    // Accessories = data.accessories;
    // Age = data.age;
    // IsFoodtime = data.isFoodtime;
    // Email = data.email;
  }

  const render2 = (
    <div className="formsubmit">
      <p style={{ color: 'red', fontSize: '20px' }}>FOR UI RENDERING</p>
      <h3>
        My name is {data.firstName} {data.lastName} and i'm {data.age} years old
      </h3>
      <h3>contact me on {data.email}</h3>
      <h3>my feedback: {data.feedback}</h3>
      <h3>
        I want {data.swallow} with {data.soup} soup mixed with good{' '}
        {data.accessories}, thanks!
      </h3>
      <h3>
        {data.isFoodtime ? 'Yes please remind me' : "No, thanks. I'm alright"}
      </h3>
    </div>
  );

  const render3 = (
    <div className="formsubmit">
      <p style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>
        PLEASE FILL OUT YOUR OTHER
      </p>
    </div>
  );

  const render1 = (
    <div className="formsubmit">
      {FirstName == FirstName && Swallow == Swallow && Feedback == Feedback
        ? render3
        : render2}
    </div>
  );

  return (
    <div className="form-design">
      <form className="personal-datas" onSubmit={handleSubmit}>
        <div className="personal-data">
          <div className="input-data">
            <label htmlFor="name">Firstname </label>
            <input
              type="text"
              id="name"
              className="name"
              placeholder="firstname"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-data">
            <label htmlFor="lasttname">Lastname </label>
            <input
              type="text"
              id="lasttname"
              className="name"
              placeholder="lasttname"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="input-data">
            <label htmlFor="age">Age </label>
            <input
              type="number"
              placeholder="age"
              className="name"
              id="age"
              name="age"
              value={data.age}
              onChange={handleChange}
            />
          </div>
          <div className="input-data">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              placeholder="email"
              className="name"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <h4>GENDER</h4>
          <div className="gender-radio">
            <div className="gender-house">
              <label htmlFor="gender">
                male
                <input
                  type="radio"
                  placeholder="age"
                  id="gender"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={data.gender === 'male'}
                />
              </label>
            </div>
            <div className="gender-house">
              <label htmlFor="gender1">
                female
                <input
                  type="radio"
                  placeholder="age"
                  id="gender1"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={data.gender === 'female'}
                />
              </label>
            </div>
          </div>
        </div>
        <div>
          <h4>Order Your Taste</h4>
          <div className="order-food">
            <select name="swallow" value={data.swallow} onChange={handleChange}>
              <option value="">-Swallow-</option>
              <option value="amala">Amala</option>
              <option value="iyan">Iyan</option>
              <option value="semovita">Semovita</option>
            </select>
            <select name="soup" onChange={handleChange} value={data.soup}>
              <option value="">-Soup-</option>
              <option value="ewedu">Ewedu</option>
              <option value="efor">Efor-riro</option>
              <option value="egusi">Egusi</option>
            </select>
            <select
              name="accessories"
              onChange={handleChange}
              value={data.accessories}
            >
              <option value="">-Accessories-</option>
              <option value="meat">Meat</option>
              <option value="chicken">Chicken</option>
              <option value="turkey">Turkey</option>
              <option value="beef">Beef</option>
              <option value="fish">Fish</option>
            </select>
          </div>
          {/* <div className="rate-us">
            <p>Rate Us:</p>
            <div
              name="rating"
              checked={data.rating === 1}
              value="1"
              onClick={handleChange}
              className="box"
            ></div>
            <div
              name="rating"
              checked={data.rating === 2}
              value="2"
              onClick={handleChange}
              className="box"
            ></div>
            <div
              name="rating"
              checked={data.rating === 3}
              value="3"
              onClick={handleChange}
              className="box"
            ></div>
            <div
              name="rating"
              checked={data.rating === 4}
              value="4"
              onClick={handleChange}
              className="box"
            ></div>
            <div
              name="rating"
              checked={data.rating === 5}
              value="5"
              onClick={handleChange}
              className="box"
            ></div>
          </div> */}
          <p>Leave a feedback</p>
          <textarea
            name="feedback"
            onChange={handleChange}
            value={data.feedback}
            placeholder=""
          />
          <br />
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={handleChange}
              name="isFoodtime"
              id="like"
              className="king"
            />
            <label htmlFor="like">
              I'm eating {time}, remind me for my {food}
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={handleChange}
              name="isShowOutput"
              id="likes"
              className="king"
            />
            <label htmlFor="likes">check this to get your inputs</label>
          </div>
        </div>
        <button>CHECKOUT</button>
      </form>
      <br />
      <br />
      {data.isShowOutput && render1}
    </div>
  );
}
