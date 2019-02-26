export class Stats {
  clicks = new EventType();
  critClicks = new EventType();
  superCritClicks = new EventType();
  epicCritClicks = new EventType();
  chargedClicks = new EventType();
  perfectChargedClicks = new EventType();
  posClicks = new EventType();
  negClicks = new EventType();
  happyClicks = new EventType();
  excitedClicks = new EventType();
  sleepClicks = new EventType();
  sadClicks = new EventType();
  madClicks = new EventType();
  angryClicks = new EventType();

  reset() {
    for (const key in this) {
      if (this.hasOwnProperty(key) && this[key] instanceof EventType) {
        const element = this[key] as any as EventType;
        element.reset();
      }
    }
  }
}

export enum EVENT {
  MANUAL = 0,
  AUTO,
  COMBINED
}

export enum STAT_SCOPE {
  CURRENT = 0,
  LIFETIME
}

export class EventType {
  manual = new StatScope();
  auto = new StatScope();


  get(type = EVENT.COMBINED): number {
    switch (type) {
      case EVENT.MANUAL:
        return this.manual.get();
        break;
      case EVENT.AUTO:
        return this.auto.get();
        break;
      case EVENT.COMBINED:
        return this.manual.get() + this.auto.get();
        break;
    }
  }

  inc(val = 1, type = EVENT.MANUAL) {
    switch (type) {
      case EVENT.MANUAL:
        this.manual.inc(val);
        break;
      case EVENT.AUTO:
        this.auto.inc(val);
        break;
    }
  }

  reset() {
    this.manual.reset();
    this.auto.reset();
  }
}

export class StatScope {
  current = 0;
  lifetime = 0;

  get(type = STAT_SCOPE.CURRENT): number {
    switch (type) {
      case STAT_SCOPE.CURRENT:
        return this.current;
        break;
      case STAT_SCOPE.LIFETIME:
        return this.lifetime;
        break;
    }
  }

  inc(val = 1) {
    this.current += val;
    this.lifetime += val;
  }

  reset() {
    this.current = 0;
  }
}
