
export class User {
  Email: string = ''
  Picture: string = ''
  Name: string = ''
  LastName: string = ''
  Type: string = ''
  HasManaged: boolean = false
  Medals: any[] = []
  id: string = ''
  isAndreu: boolean = false

  public constructor(
    email?: string,
    picture?: string,
    name?: string,
    lastName?: string,
    type?: string,
    hasManaged?: boolean,
    medals?: any[],
    id?: string,
    isAndreu?: boolean) {
      this.Email = email
      this.Picture = picture
      this.Name = name
      this.LastName = lastName
      this.Type = type
      this.HasManaged = hasManaged
      this.Medals = medals
      this.id = id
      this.isAndreu = isAndreu
    }

    setPicture(picture: string) {
      this.Picture = picture
    }
}

export enum UserType {
  invitado = "Invitado",
  invitada = "Invitada",
  invitade = "Invitade",
  piopio = "Pio pio",

  novato = "Novato",
  novata = "Novata",
  novate = "Novate",

  veterano = "Veterano",
  veterana = "Veterana",
  veterane = "Veterane",

  leyenda = "Leyenda",

  fundador = "Fundador",
  fundadora = "Fundadora"
}
