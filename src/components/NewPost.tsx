

const NewPost = () => {
  return (
    <form className="newPost">
      <h2>NEW POST SAMPLE</h2>
      <div>
        <h3>date</h3>
        <input type="date" name="" id="" />
      </div>
      <div>
        <h3>habits</h3>
        <table>
          <thead>
            <tr>
              <th>habit type</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>sleep</th>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <th>exercise</th>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <th>practice guitar</th>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <th>read</th>
              <td><input type="text" name="" id="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>What did I accomplish</h3>
        <ul>
          <li>
            <input type="text" name="" id="" />
          </li>
          <li>
            <input type="text" name="" id="" />
          </li>
          <li>
            <input type="text" name="" id="" />
          </li>
        </ul>
      </div>
      <div>
        <h3>What didn't go well</h3>
        <ul>
          <li>
            <input type="text" name="" id="" />
          </li>
          <li>
            <input type="text" name="" id="" />
          </li>
          <li>
            <input type="text" name="" id="" />
          </li>
        </ul>
      </div>
      <div>
        <h3>Goals for next week</h3>
        <ul>
          <li>
            <input type="text" name="" id="" />
          </li>
          <li>
            <input type="text" name="" id="" />
          </li>
          <li>
            <input type="text" name="" id="" />
          </li>
        </ul>
      </div>
    </form>
  )
}

export default NewPost;