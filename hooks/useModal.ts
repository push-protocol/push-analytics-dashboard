// React, NextJS imports
import { useState, useEffect } from 'react';

// External Library imports
import { toast } from 'react-toastify';

// Internal Components imports
import { updateGovernanceData, getGovernanceData } from '../utils/api';
import { useData } from '../contexts/DataContext';
import { GovernanceType } from '../types/governance';
import { DataContextType } from '../types/context';

export default function useModal() {
  const { updateTracker, setUpdateTracker }: DataContextType = useData();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [governanceData, setGovernanceData] = useState<GovernanceType>();
  const [formData, setFormData] = useState({
    inprogress: -1,
    approved: -1,
    rejected: -1,
    pushgrants: -1,
    approvedgrant: -1,
    yettoallocategrant: -1,
    approvedimprovement: -1,
    rejectedimprovement: -1,
    defi: -1,
    nft: -1,
    dao: -1,
    tooling: -1,
    marketing: -1,
    education: -1,
    gaming: -1,
    others: -1,
    // dapp: 0,
    // mobile_ios: 0,
    // mobile_android: 0,
    // extensions: 0,
    push_integrations: -1,
  });

  useEffect(() => {
    (async () => {
      const res = await getGovernanceData();
      setGovernanceData(res?.governance_data);
    })();
  }, []);

  const handleChange = (prop: any) => (event: any) => {
    setFormData({ ...formData, [prop]: parseInt(event.target.value) });
  };

  const updateGrantProposalData = (inputData) => {
    setFormData({
      ...formData,
      ['approved']: inputData.approved,
      ['inprogress']: inputData.open,
      ['rejected']: inputData.closed,
    });
  };

  const updateGrantsData = (inputData) => {
    setFormData({
      ...formData,
      ['pushgrants']: inputData.grants,
      ['approvedgrant']: inputData.approved,
      ['yettoallocategrant']: inputData.yetToBeAllocated,
    });
  };

  const updateGovernanceImprovementData = (inputData) => {
    setFormData({
      ...formData,
      ['approvedimprovement']: inputData.approved,
      ['rejectedimprovement']: inputData.closed,
    });
  };

  const updateGrantsCategoryData = (inputData) => {
    setFormData({
      ...formData,
      ['defi']: inputData.defi,
      ['nft']: inputData.nft,
      ['dao']: inputData.dao,
      ['education']: inputData.education,
      ['marketing']: inputData.marketing,
      ['tooling']: inputData.tooling,
      ['gaming']: inputData.gaming,
      ['others']: inputData.others,
    });
  };

  const updatePushIntegrationData = (pushIntegrations) => {
    setFormData({ ...formData, ['push_integrations']: pushIntegrations });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      Governance: {
        PGP_Amount: {
          Approved:
            formData.approvedgrant == -1
              ? governanceData?.Governance?.PGP_Amount?.Approved
              : formData.approvedgrant,
          'Yet To Be Allocated':
            formData.yettoallocategrant == -1
              ? governanceData?.Governance?.PGP_Amount['Yet To Be Allocated']
              : formData.yettoallocategrant,
        },
        PGP_Proposals: {
          Approved:
            formData.approved == -1
              ? governanceData?.Governance?.PGP_Proposals?.Approved
              : formData.approved,
          Open:
            formData.inprogress == -1
              ? governanceData?.Governance?.PGP_Proposals?.Open
              : formData.inprogress,
          Closed:
            formData.rejected == -1
              ? governanceData?.Governance?.PGP_Proposals?.Closed
              : formData.rejected,
        },
        PGP_Categories: {
          Defi:
            formData.defi == -1
              ? governanceData?.Governance?.PGP_Categories?.Defi
              : formData.defi,
          NFT:
            formData.nft == -1
              ? governanceData?.Governance?.PGP_Categories?.NFT
              : formData.nft,
          DAO:
            formData.dao == -1
              ? governanceData?.Governance?.PGP_Categories?.DAO
              : formData.dao,
          Education:
            formData.education == -1
              ? governanceData?.Governance?.PGP_Categories?.Education
              : formData.education,
          Marketing:
            formData.marketing == -1
              ? governanceData?.Governance?.PGP_Categories?.Marketing
              : formData.marketing,
          Tooling:
            formData.tooling == -1
              ? governanceData?.Governance?.PGP_Categories?.Tooling
              : formData.tooling,
          Gaming:
            formData.gaming == -1
              ? governanceData?.Governance?.PGP_Categories?.Gaming
              : formData.gaming,
          Other:
            formData.others == -1
              ? governanceData?.Governance?.PGP_Categories?.Other
              : formData.others,
        },
        PGIP: {
          Approved:
            formData.approvedimprovement == -1
              ? governanceData?.Governance?.PGIP?.Approved
              : formData.approvedimprovement,
          Closed:
            formData.rejectedimprovement == -1
              ? governanceData?.Governance?.PGIP?.Closed
              : formData.rejectedimprovement,
        },
      },
      // Downloads: {
      //   DApp: formData.dapp,
      //   'Chrome Extension': formData.extensions,
      //   'Mobile-iOS': formData.mobile_ios,
      //   'Mobile-Android': formData.mobile_android,
      // },
      Miscellaneous: {
        Push_Grants:
          formData.pushgrants == -1
            ? governanceData?.Miscellaneous?.Push_Grants
            : formData.pushgrants,
        Push_Integrations:
          formData.push_integrations == -1
            ? governanceData?.Miscellaneous?.Push_Integrations
            : formData.push_integrations,
      },
    };
    const result = await updateGovernanceData({ data });
    if (result.success === 1) {
      toast.success('Data uploaded successfully');
    } else {
      toast.error('Data upload failed');
    }
    setUpdateTracker?.(!updateTracker);
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleChange,
    handleSubmit,
    formData,
    updateGrantsCategoryData,
    updateGrantProposalData,
    updateGrantsData,
    updateGovernanceImprovementData,
    updatePushIntegrationData,
    governanceData,
  };
}
