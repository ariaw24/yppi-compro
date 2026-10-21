import type { Applicant as IApplicant } from '@/types';

export type ApplicantStatus = 'Menunggu Berkas' | 'Lolos Verifikasi' | 'Diterima' | 'Ditolak';

export class ApplicantModel implements IApplicant {
  constructor(
    public id: string,
    public name: string,
    public school: string,
    public track: string,
    public status: string = 'Menunggu Berkas'
  ) {}

  public isVerified(): boolean {
    return this.status === 'Lolos Verifikasi';
  }

  public isAccepted(): boolean {
    return this.status === 'Diterima';
  }

  public toggleStatus(): void {
    if (this.status === 'Lolos Verifikasi') {
      this.status = 'Diterima';
    } else {
      this.status = 'Lolos Verifikasi';
    }
  }

  public static fromObject(data: IApplicant): ApplicantModel {
    return new ApplicantModel(data.id, data.name, data.school, data.track, data.status);
  }

  public toJSON(): IApplicant {
    return {
      id: this.id,
      name: this.name,
      school: this.school,
      track: this.track,
      status: this.status,
    };
  }
}
