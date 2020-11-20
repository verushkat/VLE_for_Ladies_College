import { UserType } from '../../shared/models/common/user-type.model';
import { UserSection } from '../../shared/models/common/user-section.model';

export class User {
  email: string;
  refId: string;
  type: UserType;
  section?: UserSection;
}
