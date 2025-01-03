import * as actionTypes from "../actionTypes";

// Action to get all Partners
export const getPartners = () => ({
  type: actionTypes.GET_PARTNERS,
});

// Action to set Partners in the state
export const setPartners = (payload) => ({
  type: actionTypes.SET_PARTNERS,
  payload,
});

// Action to get a specific Partner by its ID
export const getPartnerById = (payload) => ({
  type: actionTypes.GET_PARTNER_BY_ID,
  payload, // ID of the Partner to fetch
});

// Action to set a specific Partner
export const setPartner = (payload) => ({
  type: actionTypes.SET_PARTNER,
  payload,
});

// Action to create a new Partner
export const createPartner = (payload) => ({
  type: actionTypes.CREATE_PARTNER,
  payload,
});

// Action to indicate successful Partner creation
export const createPartnerSuccess = (payload) => ({
  type: actionTypes.CREATE_PARTNER_SUCCESS,
  payload,
});

// Action to indicate failed Partner creation
export const createPartnerFailure = (payload) => ({
  type: actionTypes.CREATE_PARTNER_FAILURE,
  payload,
});

// Action to update an existing Partner
export const updatePartner = (id, partnerData) => ({
  type: actionTypes.UPDATE_PARTNER,
  payload: {
    id, // Include the ID in the payload
    data: partnerData, // Include the Partner data in the payload
  },
});

// Action to indicate successful Partner update
export const updatePartnerSuccess = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_SUCCESS,
  payload,
});

// Action to indicate failed Partner update
export const updatePartnerFailure = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_FAILURE,
  payload,
});
// Action to update an existing Partner
export const updatePartnerBankDetails = (id, partnerData) => ({
  type: actionTypes.UPDATE_PARTNER_BANK_DETAILS,
  payload: {
    id, // Include the ID in the payload
    data: partnerData, // Include the Partner data in the payload
  },
});

// Action to indicate successful Partner update
export const updatePartnerBankDetailsSuccess = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_BANK_DETAILS_SUCCESS,
  payload,
});

// Action to indicate failed Partner update
export const updatePartnerBankDetailsFailure = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_BANK_DETAILS_FAILURE,
  payload,
});
// Action to update an existing Partner
export const updatePartnerBasicDetails = (id, partnerData) => ({
  type: actionTypes.UPDATE_PARTNER_BASIC_DETAILS,
  payload: {
    id, // Include the ID in the payload
    data: partnerData, // Include the Partner data in the payload
  },
});

// Action to indicate successful Partner update
export const updatePartnerBasicDetailsSuccess = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_BASIC_DETAILS_SUCCESS,
  payload,
});

// Action to indicate failed Partner update
export const updatePartnerBasicDetailsFailure = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_BASIC_DETAILS_FAILURE,
  payload,
});

// Action to update an existing Partner
export const updatePartnerGstDetails = (id, partnerData) => ({
  type: actionTypes.UPDATE_PARTNER_GST_DETAILS,
  payload: {
    id, // Include the ID in the payload
    data: partnerData, // Include the Partner data in the payload
  },
});

// Action to indicate successful Partner update
export const updatePartnerGstDetailsSuccess = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_GST_DETAILS_SUCCESS,
  payload,
});

// Action to indicate failed Partner update
export const updatePartnerGstDetailsFailure = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_GST_DETAILS_FAILURE,
  payload,
});

// Action to update an existing Partner
export const updatePartnerFirmDetails = (id, partnerData) => ({
  type: actionTypes.UPDATE_PARTNER_FIRM_DETAILS,
  payload: {
    id, 
    data: partnerData, 
  },
});

// Action to indicate successful Partner update
export const updatePartnerFirmDetailsSuccess = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_FIRM_DETAILS_SUCCESS,
  payload,
});

// Action to indicate failed Partner update
export const updatePartnerFirmDetailsFailure = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_FIRM_DETAILS_FAILURE,
  payload,
});

// Action to update an existing Partner
export const updatePartnerDetails = (id, partnerData) => ({
  type: actionTypes.UPDATE_PARTNER_DETAILS,
  payload: {
    id, 
    data: partnerData, 
  },
});

// Action to indicate successful Partner update
export const updatePartnerDetailsSuccess = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_DETAILS_SUCCESS,
  payload,
});

// Action to indicate failed Partner update
export const updatePartnerDetailsFailure = (payload) => ({
  type: actionTypes.UPDATE_PARTNER_DETAILS_FAILURE,
  payload,
});

// Action to delete a Partner
export const deletePartner = (payload) => ({
  type: actionTypes.DELETE_PARTNER,
  payload, // Partner ID
});

// Action to indicate successful Partner deletion
export const deletePartnerSuccess = (payload) => ({
  type: actionTypes.DELETE_PARTNER_SUCCESS,
  payload,
});

// Action to indicate failed Partner deletion
export const deletePartnerFailure = (payload) => ({
  type: actionTypes.DELETE_PARTNER_FAILURE,
  payload,
});
