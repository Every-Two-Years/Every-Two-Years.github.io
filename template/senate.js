module.exports = house => `
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>State</th>
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

const row = ({state, name, picture, href}) => `
        <tr>
          <td class="picture">
            <img src="${picture}"/>
          </td>
          <td class="name">
            <a href="${href}">${name}</a>
          </td>
          <td class="state">${state}</td>
          <td><img class="status" src="./media/fail.svg"/></td>
          <td><img class="status" src="./media/fail.svg"/></td>
          <td><img class="status" src="./media/fail.svg"/></td>
        </tr>
`

