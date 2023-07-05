
export class User {
  Email: string = ''
  HasManaged: string
  LastName: string
  Medals: string[]
  Name: string
  Type: string
  id: string

  public constructor(
    public newEmail?: string,
    public newHasManaged?: string,
    public newLastName?: string,
    public newMedals?: string[],
    public newName?: string,
    public newType?: string,
    public newid?: string,
  ) {
    this.Email = newEmail ? newEmail : ""
    this.HasManaged = newHasManaged ? newHasManaged : ""
    this.LastName = newLastName ? newLastName : ""
    this.Medals = newMedals ? newMedals : []
    this.Name = newName ? newName : ""
    this.Type = newType ? newType : ""
    this.id = newid ? newid : ""
  }
}
