import { ApplicantModel } from '@/models';
import { initialApplicants, ppdbWaves } from '@/data';
import type { PPDBWave } from '@/types';

export class PPDBService {
  private static instance: PPDBService;
  private applicants: ApplicantModel[];
  private waves: PPDBWave[];

  private constructor() {
    this.applicants = initialApplicants.map((a) => ApplicantModel.fromObject(a));
    this.waves = [...ppdbWaves];
  }

  public static getInstance(): PPDBService {
    if (!PPDBService.instance) {
      PPDBService.instance = new PPDBService();
    }
    return PPDBService.instance;
  }

  public getApplicants(): ApplicantModel[] {
    return [...this.applicants];
  }

  public getWaves(): PPDBWave[] {
    return [...this.waves];
  }

  public toggleApplicantStatus(id: string): ApplicantModel[] {
    this.applicants = this.applicants.map((app) => {
      if (app.id === id) {
        const copy = new ApplicantModel(app.id, app.name, app.school, app.track, app.status);
        copy.toggleStatus();
        return copy;
      }
      return app;
    });
    return this.getApplicants();
  }

  public addApplicant(applicant: ApplicantModel): void {
    this.applicants = [applicant, ...this.applicants];
  }

  public getStats() {
    const total = 48; // demo static figure
    const pending = this.applicants.filter((a) => a.status === 'Menunggu Berkas').length + 10;
    const accepted = this.applicants.filter((a) => a.isAccepted()).length + 30;
    return { total, pending, accepted };
  }
}

export const ppdbService = PPDBService.getInstance();
