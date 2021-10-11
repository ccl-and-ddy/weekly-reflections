

const NewPost = () => {
  return (
    <form>
      <h2>date</h2>
      <input type="date" name="" id="" />
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
      <h3>What did I accomplish</h3>
      <button>edit</button>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
      <h3>What didn't go well</h3>
      <button>edit</button>
      <ul>
        <li>do</li>
        <li>re</li>
        <li>mi</li>
      </ul>
      <h3>Goals for next week</h3>
      <button>edit</button>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </form>
  )
}

export default NewPost;