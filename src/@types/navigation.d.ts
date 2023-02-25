export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      'manage-meal': {
        mode: 'create' | 'edit';
      };
      meal: {
        isInTheDiet: boolean;
      };
      feedback: {
        isPositiveFeedback: boolean;
      };
    }
  }
}