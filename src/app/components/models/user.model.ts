
export class User {
  Email: string = ''
  Picture: string = ''
  Name: string = ''
  LastName: string = ''
  Type: string = ''
  HasManaged: boolean = false
  Medals: any[] = []
  id: string = ''

  public constructor(
    email?: string,
    picture?: string,
    name?: string,
    lastName?: string,
    type?: string,
    hasManaged?: boolean,
    medals?: any[],
    id?: string) {
      this.Email = email
      this.Picture = picture
      this.Name = name
      this.LastName = lastName
      this.Type = type
      this.HasManaged = hasManaged
      this.Medals = medals
      this.id = id
    }

    setPicture(picture: string) {
      this.Picture = picture
    }
}
