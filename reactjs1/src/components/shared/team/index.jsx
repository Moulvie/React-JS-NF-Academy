export default function Teams(){
    return(
        <>
      <section id="team" className="my-5">
        <h2 className="text-center mb-4">My Team</h2>
        <div className="row">
          {[
            { name: 'Muhammad Imam Najib', role: 'Project Manager', img: 'https://scontent.fcgk4-4.fna.fbcdn.net/v/t39.30808-1/489241345_644773708382748_6274659501080332822_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE9o485LACrHCH7jZpTTzbmUjsKqNwTDCRSOwqo3BMMJE3p4z83kmhl4SBmWXxr1e3qndDBJCujE2Vc5ac321RL&_nc_ohc=mTUVZIg_5TEQ7kNvwG7FiK4&_nc_oc=AdmJReV148pQsoZox94-lc8HmbCwBcnWZTfx5joUKlZcZDvrfkj5XkGMUIj3PrED0t4&_nc_zt=24&_nc_ht=scontent.fcgk4-4.fna&_nc_gid=df7MAXgQ3oVdGFqG3bqmpw&oh=00_AfHN55qEpb7aTu5kQ-f77hoOgG6fGS9KTY1H83ch01jjhA&oe=6806C442' },
            { name: 'Fadel Amili', role: 'Developer', img: 'https://scontent.fcgk3-4.fna.fbcdn.net/v/t39.30808-1/481771640_2597860927091731_92580203988816586_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHhyAvrjSnyqHOMzV2l9ClqeH3uXIOnQqN4fe5cg6dCozUDktJ_Y4qaPNcDp9lGTOr6LwrWXztF5oK_5mllOMBp&_nc_ohc=ZBsQuly_4Q8Q7kNvwELjPFL&_nc_oc=AdnOwrJ0xXOw2NjDblW-lvFkLZE8i5E3MESnMBqMmrPbXMoeuYwNtctWlS4Y0vRC2AwvW5kNlP1W70tE7szSxMkr&_nc_zt=24&_nc_ht=scontent.fcgk3-4.fna&_nc_gid=40GNZ7aCxCFHn_S-EqNEUQ&oh=00_AfGUb34o3r3ud3og48Q4Acjqtu8soUAGh2zUmEK10tZbyA&oe=6806DB18' },
            { name: 'Rizky Maulana', role: 'Designer', img: 'https://scontent.fcgk3-3.fna.fbcdn.net/v/t39.30808-1/467021228_594143943275038_2438284091704369309_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE0jg699zJH4ylEmUIR2kwcK9CS17O3a_Ir0JLXs7dr8vEDciL1TdIE_JLp0ez1ZnCwNbox39ZynxwJT31chj6m&_nc_ohc=QFhdfkOCfu4Q7kNvwHUsSa0&_nc_oc=Adn9OXaEqrgtrXQCZaMWdvfEhkN6I8qKZCtjPB0moequ-LdRTCM6N8k8yUAlXY1FAQdawx3WXw7KABz8AnkEyjhC&_nc_zt=24&_nc_ht=scontent.fcgk3-3.fna&_nc_gid=fru_MT0VGQQbvqCsG5XoQA&oh=00_AfFLzHYrZVadRPGECRHhnumBVy4eWmdhsJ-7FrWmGgQlDw&oe=6806BAC4' },
          ].map((member, index) => (
            <div className="col-md-4 text-center" key={index}>
              <img src={member.img} className="rounded-circle mb-3" alt={member.name} />
              <h5>{member.name}</h5>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Book</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Team</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>
    </ul>
    <p className="text-center text-body-secondary">&copy; RIZKY MAULANA</p>
  </footer>
</div>
        </>
    )
}