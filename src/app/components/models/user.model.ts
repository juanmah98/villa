
export class User {
  Email: string = ''
  HasManaged: string = ''
  LastName: string = ''
  Medals: string[] = []
  Name: string = ''
  Type: string = ''
  id: string = ''

  public constructor(
    email?: string,
    hasManaged?: string,
    lastName?: string,
    medals?: string[],
    name?: string,
    type?: string,
    id?: string) {
      this.Email = email
      this.HasManaged = hasManaged
      this.LastName = lastName
      this.Medals = medals
      this.Name = name
      this.Type = type
      this.id = id
    }
}
