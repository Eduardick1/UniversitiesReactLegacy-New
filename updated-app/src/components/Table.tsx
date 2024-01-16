import { IUnivesity } from "../utils/types";

export default function Table({ tableData }: { tableData: IUnivesity[] }) {
  console.log(tableData);
  return (
    <table>
      <thead>
        <tr>
          <th>University name</th>
          <th>Country code</th>
          <th>Domains</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(({ name, alpha_two_code, domains }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{alpha_two_code}</td>
            <td>
              {domains.map((domain) => (
                <a key={domain} href={`https://${domain}`} target="_blank">
                  {domain}
                </a>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
