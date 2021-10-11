

const WeeklyPost = () => {
  return (
    <article>
      <div className="wrapper">
        <h2>sun, oct 10, 2021</h2>
        <div>
          <h3>habits</h3>
          <button>edit</button>
          <table>
            <thead>
              <tr>
                <th>type</th>
                <th>details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>sleep</th>
                <td>well rested</td>
              </tr>
              <tr>
                <th>exercise</th>
                <td>5 days</td>
              </tr>
              <tr>
                <th>practice guitar</th>
                <td>3 days</td>
              </tr>
              <tr>
                <th>read</th>
                <td>3 hours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>What did I accomplish</h3>
          <button>edit</button>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
        <div>
          <h3>What didn't go well</h3>
          <button>edit</button>
          <ul>
            <li>do</li>
            <li>re</li>
            <li>mi</li>
          </ul>
        </div>
        <div>
          <h3>Goals for next week</h3>
          <button>edit</button>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default WeeklyPost;