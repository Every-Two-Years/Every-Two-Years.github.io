module.exports = house => `
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>District</th>
          <th><img src="./media/camera-black.svg"/></th>
          <th><img src="./media/voting-black.svg"/></th>
          <th><img src="./media/money-black.svg"/></th>
        </tr>
      </thead>
      <tbody>
${house.map(row).join("\n")}
      </tbody>
    </table>
`

const row = ({district, name, picture, href}) => `
        <tr>
          <td class="picture">
            <img src="${picture}"/>
          </td>
          <td class="name">
            <a href="${href}">${name}</a>
          </td>
          <td class="district">${district}</td>
          <td><img class="status" src="./media/fail.svg"/></td>
          <td><img class="status" src="./media/fail.svg"/></td>
          <td><img class="status" src="./media/fail.svg"/></td>
        </tr>
`

