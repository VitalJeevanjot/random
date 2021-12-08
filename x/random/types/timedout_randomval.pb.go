// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: random/timedout_randomval.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type TimedoutRandomval struct {
	Id      uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Creator string `protobuf:"bytes,2,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *TimedoutRandomval) Reset()         { *m = TimedoutRandomval{} }
func (m *TimedoutRandomval) String() string { return proto.CompactTextString(m) }
func (*TimedoutRandomval) ProtoMessage()    {}
func (*TimedoutRandomval) Descriptor() ([]byte, []int) {
	return fileDescriptor_c9fa249409abec9d, []int{0}
}
func (m *TimedoutRandomval) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TimedoutRandomval) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TimedoutRandomval.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TimedoutRandomval) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TimedoutRandomval.Merge(m, src)
}
func (m *TimedoutRandomval) XXX_Size() int {
	return m.Size()
}
func (m *TimedoutRandomval) XXX_DiscardUnknown() {
	xxx_messageInfo_TimedoutRandomval.DiscardUnknown(m)
}

var xxx_messageInfo_TimedoutRandomval proto.InternalMessageInfo

func (m *TimedoutRandomval) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *TimedoutRandomval) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*TimedoutRandomval)(nil), "genievot.random.random.TimedoutRandomval")
}

func init() { proto.RegisterFile("random/timedout_randomval.proto", fileDescriptor_c9fa249409abec9d) }

var fileDescriptor_c9fa249409abec9d = []byte{
	// 185 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2f, 0x4a, 0xcc, 0x4b,
	0xc9, 0xcf, 0xd5, 0x2f, 0xc9, 0xcc, 0x4d, 0x4d, 0xc9, 0x2f, 0x2d, 0x89, 0x87, 0xf0, 0xcb, 0x12,
	0x73, 0xf4, 0x0a, 0x8a, 0xf2, 0x4b, 0xf2, 0x85, 0xc4, 0xd2, 0x53, 0xf3, 0x32, 0x53, 0xcb, 0xf2,
	0x4b, 0xf4, 0x20, 0x32, 0x50, 0x4a, 0x4a, 0x24, 0x3d, 0x3f, 0x3d, 0x1f, 0xac, 0x44, 0x1f, 0xc4,
	0x82, 0xa8, 0x56, 0xb2, 0xe5, 0x12, 0x0c, 0x81, 0x9a, 0x14, 0x04, 0x33, 0x48, 0x88, 0x8f, 0x8b,
	0x29, 0x33, 0x45, 0x82, 0x51, 0x81, 0x51, 0x83, 0x25, 0x88, 0x29, 0x33, 0x45, 0x48, 0x82, 0x8b,
	0x3d, 0xb9, 0x28, 0x35, 0xb1, 0x24, 0xbf, 0x48, 0x82, 0x49, 0x81, 0x51, 0x83, 0x33, 0x08, 0xc6,
	0x75, 0x72, 0x3e, 0xf1, 0x48, 0x8e, 0xf1, 0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27,
	0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28, 0xcd, 0xf4, 0xcc,
	0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c, 0x7d, 0x98, 0x8b, 0xf4, 0xa1, 0x6e, 0xaf, 0x80,
	0x31, 0x4a, 0x2a, 0x0b, 0x52, 0x8b, 0x93, 0xd8, 0xc0, 0x4e, 0x31, 0x06, 0x04, 0x00, 0x00, 0xff,
	0xff, 0xa5, 0xdf, 0x4f, 0x2b, 0xdb, 0x00, 0x00, 0x00,
}

func (m *TimedoutRandomval) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TimedoutRandomval) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TimedoutRandomval) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTimedoutRandomval(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintTimedoutRandomval(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintTimedoutRandomval(dAtA []byte, offset int, v uint64) int {
	offset -= sovTimedoutRandomval(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *TimedoutRandomval) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovTimedoutRandomval(uint64(m.Id))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTimedoutRandomval(uint64(l))
	}
	return n
}

func sovTimedoutRandomval(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTimedoutRandomval(x uint64) (n int) {
	return sovTimedoutRandomval(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *TimedoutRandomval) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTimedoutRandomval
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: TimedoutRandomval: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TimedoutRandomval: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTimedoutRandomval
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTimedoutRandomval
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTimedoutRandomval
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTimedoutRandomval
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTimedoutRandomval(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTimedoutRandomval
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTimedoutRandomval(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTimedoutRandomval
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTimedoutRandomval
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTimedoutRandomval
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTimedoutRandomval
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTimedoutRandomval
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTimedoutRandomval
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTimedoutRandomval        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTimedoutRandomval          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTimedoutRandomval = fmt.Errorf("proto: unexpected end of group")
)